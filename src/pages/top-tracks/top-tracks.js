import { Redirect } from '@reach/router';
import Axios from 'axios';
import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Track from '../../components/Track/Track';
import hash from '../../shared/window-hash';
import Loading from '../../components/Loading/Loading';

class topTracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      loading: true,
      error: null,
      pageTitle: this.generatePageTitle()
    };
  }

  componentDidMount() {
    this.fetchTopTracks();
  }

  componentDidUpdate(prevProps) {
    if (this.props.timeRange !== prevProps.timeRange) {
      this.setState({
        tracks: [],
        loading: true,
        error: null,
        pageTitle: this.generatePageTitle()
      });
      this.fetchTopTracks();
    }
  }

  generatePageTitle() {
    let pageTitle;
    switch (this.props.timeRange) {
      case 'all-time':
        pageTitle = 'Top Tracks (all time)';
        break;
      case '6-months':
        pageTitle = 'Top Tracks (past 6 months)';
        break;
      case '4-weeks':
        pageTitle = 'Top Tracks (past 4 weeks)';
        break;
      default:
        console.error('Top Tracks: Valid time range not specified.');
    }
    return pageTitle;
  }

  fetchTopTracks() {
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
        console.error('Top Tracks: Valid time range not specified.');
    }

    if (hash.access_token) {
      Axios.get('https://api.spotify.com/v1/me/top/tracks', {
        headers: { Authorization: `Bearer ${hash.access_token}` },
        params: { time_range: timeRangeParam }
      })
        .then(res => {
          this.setState({ loading: false, tracks: res.data.items });
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
            {!this.state.loading && !this.state.error && this.state.tracks && (
              <div className="collection-grid">
                {this.state.tracks.map(track => (
                  <Track key={track.id} track={track} />
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
export default topTracks;
