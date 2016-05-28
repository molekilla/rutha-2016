import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({name: 'orderBy', pure: true })
export class OrderByPipe implements PipeTransform {
  transform(value: Array<any>, field: string, fieldType: string): any {
      var date: moment.Moment = moment(value);
      console.log(field+fieldType)
      if (fieldType === 'date') {
        return value.sort((a, b) => {
          let bDate = b[field];
          let aDate = a[field];
          let diff = moment(aDate).diff(bDate);
          
          return diff >= 0 ? 1 : -1;
          
        });
      } else {
        return value;
      }

  }
}