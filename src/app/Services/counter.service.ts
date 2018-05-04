export class CounterService {
  countMovedToActive = 0;
  countMovedToInactive = 0;

  onMoved(to: string) {
    if (to === 'active') {
      this.countMovedToActive++;
      console.log('Moved to active ' + this.countMovedToActive + ' time(s)');
    } else if (to === 'inactive') {
      this.countMovedToInactive++;
      console.log('Moved to inactive ' + this.countMovedToInactive + ' time(s)');
    }
  }

}
