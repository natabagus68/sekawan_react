// Generated by https://quicktype.io

export interface GetMachineReponse {
    message:   string;
    data:      Datum[];
    limit:     number;
    totalRows: number;
    totalPage: number;
    nextPage:  null;
    prevPage:  null;
}

export interface Datum {
    id:         string;
    id_machine: string;
    no:         string;
    created_at: Date;
    updated_at: Date;
    deletedAt:  null;
}