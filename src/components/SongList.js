import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SelectedSong } from '../actions'

class SongList extends Component {
    // The yep way
    renderSongs() {
        console.log('This is props', this.props);
        return this.props.whatTheFrick.map( song => {
            // console.log(song);
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.wtf(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }

    render() {
        //what is render in React Connect
        // console.log('This is this.props from render: ', this.props.whatTheFrick);

        // The nope way
        // const songList = this.props.whatTheFrick.map( song => {
        //     console.log(song)
        //     return (
        //         <div>{song.title}</div>
        //     )
        // });
        // console.log('This is props: ', this.props);

        return (
            <div  className="ui divided list">
                {this.renderSongs()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log('This is state.selectedSong from mapStateToProps: ', state.selectedSong);
    return {
        whatTheFrick: state.songs
    }
};


export default connect(mapStateToProps, {
    wtf: SelectedSong
})(SongList)
