import { Visitor } from './visitor.model';
import { OfficeLocation } from './office-location.model';

export class VisitorLogEntry {
    public id: number;
    public user: Visitor;
    public officeLocation: OfficeLocation;
    public inTime: Date;
    public outTime: Date;
}
