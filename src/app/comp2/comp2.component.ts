import { Component, OnInit } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "app-comp2",
  templateUrl: "./comp2.component.html",
  styleUrls: ["./comp2.component.scss"]
})
export class Comp2Component implements OnInit, ControlValueAccessor {
  constructor() {}

  ngOnInit() {}

  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
}

export class Comp2Model {
  firma: string;
  country: string;
}
