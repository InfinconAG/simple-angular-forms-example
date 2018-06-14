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
    this.heroForm = formBuilder.group({
      name: ["", Validators.required],
      vorname: ["", Validators.required],
      child: this.formBuilder.group(new Comp2Model())
    });
  }

  ngOnInit() {}

  resetForm() {
    this.heroForm.reset();
  }
}
