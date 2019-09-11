import React from 'react';
import { connect } from 'react-redux'


// class SongDetails extends React.Component {
//     renderDetails() {
//         return(
//             <div>
//             </div>
//         )
//     }
//
//     render() {
//         console.log('This is this.props.song from songDetail: ', this.props);
//
//         return(
//             <div>
//                 SongDetails
//             </div>
//         )
//     }
// }

const SongDetails = ({ song }) =>  {
    if(!song) {
        return (
            <div>Select a  Song</div>
        )
    }
    // console.log(song.title);
    return (
        <div>
            {song.title}
        </div>
    )
}


const mapStateToProps = state => {
    // console.log('This is state from songDetail: ', state);
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);
