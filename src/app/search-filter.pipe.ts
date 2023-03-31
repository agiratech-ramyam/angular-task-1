import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?:any): any {
  //   if(!value) return [];
  //   if(!searchText) return value;
  //   return value.filter((filterData:string) => {
  //     console.log(filterData);
  //     return filterData.toLowerCase().includes(searchText);
  //   });

  if(!value) return null;
  if(!args) return value;

  args = args.toLowerCase();
  // debugger;
  return value.filter(function(item:any){
    return JSON.stringify(item)
    .toLowerCase()
    .includes(args);
  });


   }

}
