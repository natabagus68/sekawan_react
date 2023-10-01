export interface IPaginatedData<T> {
  q?: string;
  page: number;
  limit: number;
  totalRows: number;
  data: T[];
}

export class PaginatedData<T> {
  q?: string;
  page: number;
  limit: number;
  totalRows: number;
  data: T[];
  constructor(props: IPaginatedData<T>) {
    this.q = props.q;
    this.page = props.page;
    this.limit = props.limit;
    this.totalRows = props.totalRows;
    this.data = props.data;
  }
  static create<T>(props: IPaginatedData<T>) {
    return new PaginatedData<T>(props);
  }
  next(): PaginatedData<T> {
    if (this.totalRows < this.page) {
      this.page++;
    }
    return this;
  }
  prev(): PaginatedData<T> {
    if (this.page > 1) {
      this.page--;
    }
    return this;
  }
  unmarshall() {
    return {
      q: this.q,
      page: this.page,
      limit: this.limit,
      totalRows: this.totalRows,
      data: this.data,
    };
  }
  duplicate(): PaginatedData<T> {
    return PaginatedData.create<T>(this.unmarshall());
  }
}
