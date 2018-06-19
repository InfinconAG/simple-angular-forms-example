import { Component, OnInit, forwardRef, Input } from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  ControlContainer
} from "@angular/forms";

@Component({
  selector: "[formGroupName] app-comp2",
  templateUrl: "./comp2.component.html",
  styleUrls: ["./comp2.component.scss"]
})
export class Comp2Component implements OnInit {
  group: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    // this.formGroup = this.parent.get("child") as FormGroup;
    // var x = this.parent.controls["child"];
    // debugger;

    this.group = this.controlContainer.control as FormGroup;
    // debugger;
  }
}

export class Comp2Model {
  firma: string;
  country: string;
}
