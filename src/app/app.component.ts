import { Component, OnInit } from '@angular/core';
import { Observable, from, Observer, interval, fromEvent, of, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { MyObserver, MouseEventObserver } from './MyObserver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-rxjs';

  ngOnInit() {

    /** 來自某些數字 */
    const chars = of('a', 'b', 'c');
    chars.subscribe(new MyObserver());

    /** 來自 array */
    const nums = from([3, 4, 5, 6]);
    nums.subscribe(new MyObserver());

    /** interval 計時觸發 */
    // const secondsCounter = interval(500);
    // secondsCounter.subscribe(new MyObserver());

    /** DOM 事件觸發 */
    // const e = document.getElementsByTagName("Body");
    // const mouseMove = fromEvent(e, 'mousemove');
    // mouseMove.subscribe(new MouseEventObserver());

    /** map operators */
    const doubleNums = map( (val: number) => {
      return val * 2 ;
    });
    const doubleValues = doubleNums(nums);
    doubleValues.subscribe(new MyObserver());

    /** filter operators */
    const filterNums = filter( (val: number) =>  val > 4 );
    const filterValues = filterNums(nums);
    filterValues.subscribe(new MyObserver());

    /** pipe */
    const pipeFunctions = pipe(
      filterNums,
      doubleNums
    );
    pipeFunctions(nums).subscribe(new MyObserver());
  }

}



