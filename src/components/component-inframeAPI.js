import { Component } from '../libs/component';

export class InFrameAPI extends Component {
  static get selector() {
    return '#player';
  }

  constructor(element) {
    super(element);
  }
  addPlayerVideo() {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
      height: 'unset',
      width: '100%',
      videoId: 'TiXOQn7z9Hg',
    });
  }

  initialize() {
    this.addPlayerVideo();
    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
  }
}
