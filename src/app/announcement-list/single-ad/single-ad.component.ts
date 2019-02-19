import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/Announcement.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementsService } from 'src/app/services/announcements.service';

@Component({
  selector: 'app-single-ad',
  templateUrl: './single-ad.component.html',
  styleUrls: ['./single-ad.component.scss']
})
export class SingleAdComponent implements OnInit {

  announcement: Announcement;

  constructor(private route: ActivatedRoute,
    private announcementsService: AnnouncementsService,
    private router: Router) { }

  ngOnInit() {
    this.announcement = new Announcement('', '', 0, '');
    const id = this.route.snapshot.params['id'];
    this.announcementsService.getSingleAnnouncement(+id).then(
      (announcement: Announcement) => {
        this.announcement = announcement;
      }
    );
  }

  onBack() {
    this.router.navigate(['/announcements']);
  }

}
