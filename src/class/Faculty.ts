export class Faculty {
  university: string;
  faculty: string;
  dean: string; 
  phone: string;
  address: string;

  constructor(u: string, f: string, d: string, p: string, a: string) {
    this.university = u;
    this.faculty = f;
    this.dean = d;
    this.phone = p;
    this.address = a;
  }

}