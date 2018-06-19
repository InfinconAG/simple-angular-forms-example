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
  childGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    var testChild: Comp2Model = {
      firma: "",
      country: ""
    };

    this.childGroup = this.createChildGroup(testChild);

    this.heroForm = formBuilder.group({
      name: ["", Validators.required],
      vorname: ["", Validators.required],
      child: this.childGroup
    });
  }

  ngOnInit() {}

  private createChildGroup(childData: Comp2Model) {
    return this.formBuilder.group({
      firma: [childData.firma, Validators.required],
      country: [childData.country, Validators.required]
    });
  }

  resetForm() {
    this.heroForm.reset();
  }
}
