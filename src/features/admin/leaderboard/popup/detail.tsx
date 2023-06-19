import {
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import CloseIcon from "@common/components/icons/CloseIcon";

export default function ShowDetail({ open = false, close }) {
  return (
    <>
      <Dialog open={open} handler={() => open}>
        <div className="flex items-center justify-between px-2">
          <DialogHeader>Detail Karang Taruna</DialogHeader>
          <CloseIcon className="mr-6 cursor-pointer" onClick={close} />
        </div>
        <DialogBody divider>
          <div className="grid grid-cols-2 gap-4 px-2 pb-2">
            <Typography variant="paragraph">Nama Karang Taruna</Typography>
            <Typography variant="h6">Panca Karya Muda</Typography>
            <Typography variant="paragraph">Leaderboard Point</Typography>
            <Typography variant="h6">2430</Typography>
            <Typography variant="paragraph">Tingkatan</Typography>
            <Typography variant="h6">Nasional</Typography>
            <Typography variant="paragraph">Jumlah orang</Typography>
            <Typography variant="h6">187</Typography>
            <Typography variant="paragraph">Provinsi</Typography>
            <Typography variant="h6">Jawa Tengah</Typography>
            <Typography variant="paragraph">Kota/Kabupaten</Typography>
            <Typography variant="h6">Kab. Banjarnegara</Typography>
            <Typography variant="paragraph">Kecamatan</Typography>
            <Typography variant="h6">Kec. Banjarmangu</Typography>
            <Typography variant="paragraph">Desa/Kelurahan</Typography>
            <Typography variant="h6">Desa Banjarkulon</Typography>
            <Typography variant="paragraph">Keanggotaan</Typography>
            <div className="flex flex-col gap-4">
              <Typography variant="h6">Ketua</Typography>
              <Typography variant="h6">Wakil Ketua</Typography>
              <Typography variant="h6">Bendahara</Typography>
              <Typography variant="h6">Anggota</Typography>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
