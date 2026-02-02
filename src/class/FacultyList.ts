import { Faculty } from "./Faculty";

export class FacultyList {
  faculties: Faculty[] = [];

  addFaculty(f: Faculty) {
    this.faculties.push(f);
  }

  group(): Map<string, Faculty[]> {
    const grouped = new Map<string, Faculty[]>();
    this.faculties.forEach(faculty => {
        const uni = faculty.university;

        if (!grouped.has(uni)) {
          grouped.set(uni, []);
        }
        grouped.get(uni)!.push(faculty);
      }
    )
    return grouped;
  }
}