
import PlusIcon from '@common/components/icons-new/PlusIcon'
import TrashIcon from '@common/components/icons-new/TrashIcon'
import { Dialog, DialogBody, DialogHeader, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'

export default function ModalDetailBerita({id = null, onClose=null, handleDelete = null}) {
  return (
    <Dialog size='lg' open={id} handler={onClose} className='p-3'>
        <DialogHeader className='flex justify-between items-center'>
          <Typography variant='h4'>Detail Berita</Typography>
          <div className='flex items-center gap-5'>
            <IconButton onClick={()=>{handleDelete(); onClose()}} itemProp='1' className='bg-[#F04438] shadow-none hover:shadow-[#F04438]/20'><TrashIcon/></IconButton>
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
                <td className='p-2'>Redaktur</td>
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
              <td className='font-bold p-2 overflow-x-auto'></td>
            </tr>
            <tr>
              <td className='whitespace-nowrap self-start text-start p-2'>headline Berita</td>
              <td className='font-bold p-2'>Percepat Vaksinasi Booster di Kecamatan</td>
            </tr> 
            <tr>
              <td className='whitespace-nowrap self-start text-start p-2'>Kategori Berita</td>
              <td className='font-bold p-2'>Kesehatan</td>
            </tr>
            <tr>
              <td className='whitespace-nowrap self-start text-start align-top p-2'>Isi Berita</td>
              <td className='font-bold p-2'>Pemerintah Kota (Pemkot) Bekasi gandeng organisasi kepemudaan untuk mempercepat proses vaksinasi Covid-19 di wilayahnya. Hal tersebut terwujud dalam bentuk penandatangan kerja sama antara Pemkot Bekasi.
Lorem ipsum dolor sit amet consectetur. Turpis sed id ornare placerat tristique a. Ac arcu facilisis in convallis urna elementum. Suspendisse aliquam velit nulla aliquam accumsan quis. Proin lorem fermentum tortor proin blandit non magnis. Ipsum ut at sollicitudin consectetur risus at. Nisi quis dolor convallis facilisis ut pellentesque egestas.
Lacus accumsan donec quam mattis pulvinar. Ac est dolor ultricies adipiscing cras. Mollis mauris tortor quam id iaculis eleifend velit odio sollicitudin.</td>
            </tr>
          </table>
        </DialogBody>
      </Dialog>
  )
}
