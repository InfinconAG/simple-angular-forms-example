import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.scss"]
})
export class Comp1Component implements OnInit {
  heroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.heroForm = formBuilder.group({
      name: ["", Validators.required]
    });
  }

  ngOnInit() {}
}
