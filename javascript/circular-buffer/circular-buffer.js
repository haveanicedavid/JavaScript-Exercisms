'use strict';

class BufferEmptyException extends Error {
  constructor() {
    super('Buffer is empty');
  }
} 

class BufferFullException extends Error {
  constructor() {
    super('Buffer is full');
  }
} 

class CircularBuffer {
  constructor(bufferLength) {
    this.bufferLength = bufferLength;
    this.contents = [];
  }

  read() {
    if (this.contents.length === 0) {
      throw new BufferEmptyException();
    }
    return this.contents.shift();
  }

  write(item) {
    if (this.contents.length === this.bufferLength) {
      throw new BufferFullException();
    } else if (item) {
      this.contents.push(item);
    } 
  }

  forceWrite(item) {
    this.contents.push(item);
    this.contents.shift();
  }

  clear() {
    this.contents = [];
  }
}

module.exports.bufferEmptyException = ()   =>  new BufferEmptyException();
module.exports.bufferFullException  = ()   =>  new BufferFullException();
module.exports.circularBuffer       = size =>  new CircularBuffer(size);
