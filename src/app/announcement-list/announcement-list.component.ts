import { Component, OnInit } from '@angular/core';
import { Announcement } from '../models/Announcement.model';
import { Subscription } from 'rxjs';
import { AnnouncementsService } from '../services/announcements.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {

  announcements: Announcement[];
  announcementsSubscription: Subscription;

  constructor(private announcementsService: AnnouncementsService, private router: Router) { }

  ngOnInit() {
    this.announcementsSubscription = this.announcementsService.announcementsSubject.subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      }
    );
    this.announcementsService.emitAnnouncements();
  }

  onNewAnnouncement() {
    this.router.navigate(['/announcements', 'new']);
  }

  

}
