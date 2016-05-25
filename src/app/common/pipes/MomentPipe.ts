import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({name: 'momentDate'})
export class MomentPipe implements PipeTransform {
  transform(value: string, format: string): string {
      var date: moment.Moment = moment(value);
      return date.format(format);

  }
}