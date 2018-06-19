import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

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

    this.group = this.controlContainer.control as FormGroup;
  }
}

export class Comp2Model {
  firma: string;
  country: string;
}
