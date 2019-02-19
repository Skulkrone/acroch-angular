import { Injectable } from '@angular/core';
import { Announcement } from '../models/Announcement.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  announcements: Announcement[] = [];
  announcementsSubject = new Subject<Announcement[]>();

  constructor() { }

  //pour émettre le Subject
  emitAnnouncements() {
    this.announcementsSubject.next(this.announcements);
  }

  //Enregistrer les annonces dans la db
  saveAnnouncements() {
    firebase.database().ref('/announcements').set(this.announcements);
  }

  //Récupérer les annonces depuis la db
  getAnnouncements() {
    firebase.database().ref('/announcements').on('value', (data) => {
      this.announcements = data.val() ? data.val() : [];
      this.emitAnnouncements;
    })
  }

  //Récupérer une seule annonce
  getSingleAnnouncement(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/announcements/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        )
      }
    );
  }

  //Créer une nouvelle annonce
  createNewAnnouncement(newAnnouncement:  Announcement) {
    this.announcements.push(newAnnouncement);
    this.saveAnnouncements();
    this.emitAnnouncements();
  }

  //Supprimer une annonce
  removeAnnouncement(announcement: Announcement) {
    const announcementIndexToRemove = this.announcements.findIndex(
      (announcementEl) => {
        if(announcementEl === announcement) {
          return true;
        }
      }
    );
    this.announcements.splice(announcementIndexToRemove, 1);
    this.saveAnnouncements();
    this.emitAnnouncements();
  }
}
