import { Redirect } from '@reach/router';
import Axios from 'axios';
import React, { Component } from 'react';
import Artist from '../../components/Artist/Artist';
import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import hash from '../../shared/window-hash';

class topArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      loading: true,
      error: null,
      pageTitle: this.generatePageTitle()
    };
  }

  componentDidMount() {
    this.fetchTopArtists();
  }

  componentDidUpdate(prevProps) {
    if (this.props.timeRange !== prevProps.timeRange) {
      this.setState({
        artists: [],
        loading: true,
        error: null,
        pageTitle: this.generatePageTitle()
      });
      this.fetchTopArtists();
    }
  }

  generatePageTitle() {
    let pageTitle;
    switch (this.props.timeRange) {
      case 'all-time':
        pageTitle = 'Top Artists (all time)';
        break;
      case '6-months':
        pageTitle = 'Top Artists (past 6 months)';
        break;
      case '4-weeks':
        pageTitle = 'Top Artists (past 4 weeks)';
        break;
      default:
        console.error('Top artists: Valid time range not specified.');
    }
    return pageTitle;
  }

  fetchTopArtists() {
    let timeRangeParam;
    switch (this.props.timeRange) {
      case 'all-time':
        timeRangeParam = 'long_term';
        break;
      case '6-months':
        timeRangeParam = 'medium_term';
        break;
      case '4-weeks':
        timeRangeParam = 'short_term';
        break;
      default:
        console.error('Top artists: Valid time range not specified.');
    }

    if (hash.access_token) {
      Axios.get('https://api.spotify.com/v1/me/top/artists', {
        headers: { Authorization: `Bearer ${hash.access_token}` },
        params: { time_range: timeRangeParam }
      })
        .then(res => {
          this.setState({ loading: false, artists: res.data.items });
        })
        .catch(error => {
          console.error(error);
          this.setState({ loading: false, error });
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        {hash.access_token ? (
          <Layout>
            <h1>{this.state.pageTitle}</h1>
            {this.state.loading && <Loading />}
            {this.state.error && <p>Error</p>}
            {!this.state.loading && !this.state.error && this.state.artists && (
              <div className="collection-grid">
                {this.state.artists.map(artist => (
                  <Artist key={artist.id} artist={artist} />
                ))}
              </div>
            )}
          </Layout>
        ) : (
          <Redirect noThrow to="login"></Redirect>
        )}
      </React.Fragment>
    );
  }
}
export default topArtists;
