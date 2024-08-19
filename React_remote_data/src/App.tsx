/* tslint:disable */

import {  ColumnDirective, Toolbar, Sort, ColumnsDirective, VirtualScroll, GridComponent, Reorder,
   ColumnChooser, Filter, Inject, Page, Group } from '@syncfusion/ej2-react-grids';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';

const gridData: DataManager = new DataManager({
  url: "https://services.syncfusion.com/js/production/api/UrlDataSource",
  adaptor: new UrlAdaptor()
});

const query: Query = new Query().addParams('dataCount', '100000');

export default class App extends React.Component<{}, {}>{

  public date1: number;
  public date2: number;
  public date3: number;
  public flag: boolean = true;
  public grid: GridComponent | null;
  public toolbarOptions: any = ['Search', 'ColumnChooser'];
  public dataBound() {
    if (this.flag && this.date1) {
      this.date2 = new Date().getTime();
      (document.getElementById('performanceTime') as any).innerHTML = 'Time Taken: ' + (this.date2 - this.date1) + 'ms';
      this.flag = false;
    }
  }

  public created() {
    this.date1 = new Date().getTime();
  }

  public actionBegin(args: any) {
    if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
      args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType == 'columnstate'
      || args.requestType === 'paging' || args.requestType === 'ungrouping') {
      this.date3 = new Date().getTime();
    }
  }

  public actionComplete(args: any) {
    if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
      args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType === 'columnstate'
      || args.requestType === 'paging' || args.requestType === 'ungrouping') {
      if (this.date3) {
        const dateAction: number = new Date().getTime();
        (document.getElementById('performanceTime1') as any).innerHTML = 'Action Time Taken: ' + (dateAction - this.date3) + 'ms';
      }
    }
  }

  public render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
        <span id="performanceTime">Initial Load Time Taken: 0 ms</span>
        <span>   ----- </span>
        <span id="performanceTime1"> Grid Action Taken Time : 0 ms</span>
          <GridComponent dataSource={gridData} allowPaging={false} enableVirtualization={true} height={300} ref={g => this.grid = g} dataBound={this.dataBound.bind(this)}
            created={this.created.bind(this)} actionBegin={this.actionBegin.bind(this)} actionComplete={this.actionComplete.bind(this)} allowFiltering={true}
            allowSorting={true} allowGrouping={true} allowReordering={true} showColumnChooser={true} pageSettings={{ pageSize: 2000 }} toolbar={this.toolbarOptions}
            query={query}>
            <ColumnsDirective>
              <ColumnDirective field='EmployeeID' headerText='Employee ID' textAlign="Right" width='120' ></ColumnDirective>
              <ColumnDirective field='Employees' width='160' ></ColumnDirective>
              <ColumnDirective field='Designation' textAlign="Right" width='120' ></ColumnDirective>
              <ColumnDirective field='Location' width='120' ></ColumnDirective>
              <ColumnDirective field='Address' width='160' ></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, Group, Sort, Filter, ColumnChooser, VirtualScroll, Reorder]} />
          </GridComponent>
        </div>
      </div>
    )
  }
};