import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AnnouncementsService } from 'src/app/services/announcements.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.scss']
})
export class AdFormComponent implements OnInit {

  announcementForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private announcementsService: AnnouncementsService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.announcementForm = this.formBuilder.group({
      
    })
  }

}
