import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnnouncementsService } from 'src/app/services/announcements.service';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/models/Announcement.model';

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
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: '',
      created_at: ''
    })
  }

  onSaveAnnouncement() {
    const title = this.announcementForm.get('title').value;
    const author= this.announcementForm.get('author').value;
    const created_at = Date.now();
    const description = this.announcementForm.get('description').value;
    const newAnnouncement = new Announcement(title, author, created_at, description);
    this.announcementsService.createNewAnnouncement(newAnnouncement);
    this.router.navigate(['/announcements']);
  }
}
