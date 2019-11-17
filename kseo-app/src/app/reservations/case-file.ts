import { RegistrationCard } from './registration-card';

export interface CaseFile {
    id: number;
    regNo: string;
    purpose: string;
    orgUnit: string;
    pesel: string;
    familyName: string;
    firstName: string;
    registrationCards: RegistrationCard[];
}
