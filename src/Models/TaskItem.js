export class TaskItem {
    constructor(Id, title, status, createdat, lastupdatedat) {
        this.Id = Id;
        this.Title = title;
        this.Status = status;
        this.CreatedAt = createdat;
        this.LastUpdatedAt = lastupdatedat;
    }
}