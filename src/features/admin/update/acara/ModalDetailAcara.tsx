

import PlusIcon from '@common/components/icons-new/PlusIcon'
import TrashIcon from '@common/components/icons-new/TrashIcon'
import { Dialog, DialogBody, DialogHeader, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'

export default function ModalDetailAcara({id = null, onClose=null, handleDelete = null}) {
  return (
    <Dialog size='lg' open={id} handler={onClose} className='p-3'>
        <DialogHeader className='flex justify-between items-center'>
          <Typography variant='h4'>Detail Acara</Typography>
          <div className='flex items-center gap-5'>
            <IconButton onClick={handleDelete} itemProp='1' className='bg-[#F04438] shadow-none hover:shadow-[#F04438]/20'><TrashIcon/></IconButton>
            <PlusIcon onClick={onClose} className='rotate-45 scale-150 cursor-pointer' color='black' />
          </div>
        </DialogHeader>
        <DialogBody divider className='grid grid-cols-2 text-md text-[#404446]'>
          
            <table>
              <tr>
                <td className='p-2'>Tanggal Dibuat</td>
                <td className='font-bold'>05/29/2022</td>
              </tr>
              <tr>
                <td className='p-2'>Waktu Dibuat</td>
                <td className='font-bold'>09:41</td>
              </tr>
              <tr>
                <td className='p-2'>Pembuat Acara</td>
                <td className='font-bold'>Bramanta Putra</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className='p-2'>Tanggal Disetujui</td>
                <td className='font-bold'>05/29/2022</td>
              </tr>
              <tr>
                <td className='p-2'>Waktu Disetujui</td>
                <td className='font-bold'>05:45</td>
              </tr>
              <tr>
                <td className='p-2'>Disetujui Oleh</td>
                <td className='font-bold'>Udin Junaedi</td>
              </tr>
            </table>
          
        </DialogBody>
        <DialogBody divider>
          <table className='text-md text-[#404446]'>
            <tr>
              <td className='whitespace-nowrap self-start text-start p-2'>Poster Acara</td>
              <td className='font-bold p-2'></td>
            </tr>
            <tr>
              <td className='whitespace-nowrap self-start text-start p-2'>Nama Acara</td>
              <td className='font-bold p-2'>Rapat Dewan Pengurus Karang Taruna Jaya Mandiri</td>
            </tr> 
            <tr>
              <td className='whitespace-nowrap self-start text-start p-2'>Sponsor / Donatur Acara</td>
              <td className='font-bold p-2'>Bapak H. Ridhwan Ariawan</td>
            </tr>
            <tr>
              <td className='whitespace-nowrap self-start text-start p-2'>Lokasi Acara</td>
              <td className='font-bold p-2'>Gedung Kantor Pusat Karang Taruna Kecamatan</td>
            </tr>
            <tr>
              <td className='whitespace-nowrap self-start text-start p-2'>Waktu Acara</td>
              <td className='font-bold p-2'>08:00 - 12:00</td>
            </tr>
            <tr>
              <td className='whitespace-nowrap self-start text-start align-top p-2'>Deskripsi Acara</td>
              <td className='font-bold p-2'>Ketua Umum Pengurus Pusat (PP) Muhammad akan mengadakan rapat Dewan Pengurus dengan Tema 'Masa Depan Indonesia yang berdaulat, Berdaya saing , dan mensejahterakan rakyat di kantor muhammadiyah Jakarta. para pakar muhhammadiyah akan berkumpul dan membahas apa yang dilakukan oleh organisasi kepada indonesiaS</td>
            </tr>
          </table>
        </DialogBody>
      </Dialog>
  )
}
