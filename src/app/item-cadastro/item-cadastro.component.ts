import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';
import { SelectItem } from 'primeng/primeng';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];
  risks: SelectItem[];
  selectedRisk: string;

  constructor(private itemService: ItemService) {
    this.risks = [];
    this.risks.push({label:'', value:null});
    this.risks.push({label:'A', value:'A'});
    this.risks.push({label:'B', value:'B'});
    this.risks.push({label:'C', value:'C'});
  }

  ngOnInit() {
    this.list();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  list() {
    this.itemService.list().subscribe(itens => this.itens = itens);
  }

  add(frm: FormControl) {
    this.itemService.add(frm.value).subscribe(() => {
      frm.reset();
      this.list();
    });
  }

}
