import { Component, OnInit, forwardRef, Input } from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup
} from "@angular/forms";

@Component({
  selector: "app-comp2",
  templateUrl: "./comp2.component.html",
  styleUrls: ["./comp2.component.scss"]
})
export class Comp2Component implements OnInit {
  @Input() parent: FormGroup;
  formGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formGroup = this.parent.get("child") as FormGroup;
  }
}

export class Comp2Model {
  firma: string;
  country: string;
}
