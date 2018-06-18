import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Comp2Model } from "../comp2/comp2.component";

@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.scss"]
})
export class Comp1Component implements OnInit {
  heroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    var testChild: Comp2Model = {
      firma: "testfirma",
      country: "germany"
    };

    this.heroForm = formBuilder.group({
      name: ["", Validators.required],
      vorname: ["", Validators.required],
      child: this.createChildGroup(testChild)
    });
  }

  ngOnInit() {}

  private createChildGroup(childData: Comp2Model) {
    return this.formBuilder.group({
      firma: [childData.firma, Validators.required],
      country: [childData.country]
    });
  }

  resetForm() {
    this.heroForm.reset();
  }
}
