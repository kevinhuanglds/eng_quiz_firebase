
export class MyObserver {
  next(val) {
    console.log(val);
  }

  error(e) {
    console.log('error', e);
  }

  complete() {
    console.log('complete');
  }
}

export class MouseEventObserver {
  next(e: MouseEvent) {
    console.log(e.clientX, e.clientY);
  }

  error(e) {
    console.log('error', e);
  }

  complete() {
    console.log('complete');
  }
}
