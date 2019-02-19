export class Announcement {
    photo : string;
    constructor(public title: string, public author: string, public created_at: number, public description: string) {
    }
}