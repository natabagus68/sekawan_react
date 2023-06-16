import React from "react";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  List,
  ListItem,
  ListItemSuffix,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
const ModalDialog = ({ open = false, handleOpen = null }) => {
  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Detail Karang Taruna</DialogHeader>
        <DialogBody divider>
          <ul>
            <MenuItem className="flex items-center gap-8">
              <Typography color="black">Nama Karang Taruna</Typography>
              <Typography color="black" variant="h6">
                Panca Karya Muda
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-14">
              <Typography color="black">Leaderboard Point</Typography>
              <Typography color="black" variant="h6">
                2430
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-[118px]">
              <Typography color="black">Tingkatan</Typography>
              <Typography color="black" variant="h6">
                Nasional
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-[90px]">
              <Typography color="black">Jumlah orang</Typography>
              <Typography color="black" variant="h6">
                187
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-[129px]">
              <Typography color="black">Provinsi</Typography>
              <Typography color="black" variant="h6">
                Jawa Tengah
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-[71px]">
              <Typography color="black">Kota/Kabupaten</Typography>
              <Typography color="black" variant="h6">
                Kab. Banjarnegara
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-[106px]">
              <Typography color="black">Kecamatan</Typography>
              <Typography color="black" variant="h6">
                Kec. Banjarmangu
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-[72px]">
              <Typography color="black">Desa/Kelurahan</Typography>
              <Typography color="black" variant="h6">
                Desa Banjarkulon
              </Typography>
            </MenuItem>
            <MenuItem className="flex  gap-[92px] mt-3">
              <Typography color="black">Keanggotaan</Typography>
              <div>
                {["Ketua", "Wakil Ketua", "Bendahara", "Anggota"].map(
                  (item, i) => {
                    return (
                      <Typography
                        color="black"
                        variant="h6"
                        key={i}
                        className="mb-2"
                      >
                        {item}
                      </Typography>
                    );
                  }
                )}
              </div>
            </MenuItem>
          </ul>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

export default ModalDialog;
