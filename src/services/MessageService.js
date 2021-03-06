import {PROFILE_MESSAGE_URL, USER_URL, MESSAGE_URL} from './api';
import {parseResponse} from '../utils';

const _singleton = Symbol();

export default class MessageService {
  constructor(singletonToken) {
    if(_singleton !== singletonToken) {
      throw new Error('Cannot instantiate directly');
    }
  }

  static get instance() {
    if(!this[_singleton]) {
      this[_singleton] = new MessageService(_singleton);
    }
    return this[_singleton];
  }

  sendMessage(message, recipientUsername) {
    return fetch(`${PROFILE_MESSAGE_URL}/${recipientUsername}`, {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    }).then(parseResponse);
  }

  getMessage(mid) {
    return fetch(`${MESSAGE_URL}/${mid}`)
      .then(parseResponse);
  }

  deleteMessage(mid) {
    return fetch(`${MESSAGE_URL}/${mid}`, {
      method: 'delete',
      credentials: 'include'
    })
      .then(response => response.ok);
  }

}