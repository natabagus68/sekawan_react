
import CheckIcon from '@common/components/icons-new/CheckIcon'
import InfoIcon from '@common/components/icons-new/InfoIcon'
import PlusIcon from '@common/components/icons-new/PlusIcon'
import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import useDetailAcaraModel from './DetailAcaraModel'

export default function DetailAcara() {
  const detail = useDetailAcaraModel()
  return (
    <div className='grid grid-cols-2 px-12 py-5'>
      <div>
        <table className='w-full'>
          <tr className='bg-[#F2F4F5]'>
            <td className='py-2 px-4 whitespace-nowrap'>Tanggal Dibuat</td>
            <td className='py-2 px-4 font-bold text-[#303437]'>12/12/2023</td>
          </tr>
          <tr className='bg-white'>
            <td className='py-2 px-4 whitespace-nowrap'>Waktu Pembuat</td>
            <td className='py-2 px-4 font-bold text-[#303437]'>09:41</td>
          </tr>
          <tr className='bg-[#F2F4F5]'>
            <td className='py-2 px-4 whitespace-nowrap'>Pembuat Acara</td>
            <td className='py-2 px-4 font-bold text-[#303437]'>Bramantra Putra</td>
          </tr>
          <tr className='bg-white'>
            <td className='py-2 px-4 whitespace-nowrap'>Nama Acara</td>
            <td className='py-2 px-4 font-bold text-[#303437]'>Rapat Dewan Pengurus Karang  Jaya Mandiri</td>
          </tr>
          <tr className='bg-[#F2F4F5]'>
            <td className='py-2 px-4 whitespace-nowrap'>Sponsor/Donatur Acara</td>
            <td className='py-2 px-4 font-bold text-[#303437]'>Bapak H. Ridwan Ariawana</td>
          </tr>
          <tr className='bg-white'>
            <td className='py-2 px-4 whitespace-nowrap'>Tanggal Acara</td>
            <td className='py-2 px-4 font-bold text-[#303437]'>12 Desember 2023</td>
          </tr>
          <tr className='bg-[#F2F4F5]'>
            <td className='py-2 px-4 whitespace-nowrap'>Lokasi Acara</td>
            <td className='py-2 px-4 font-bold text-[#303437]'>Gedung A Kantor Pusat</td>
          </tr>
          <tr className='bg-white'>
            <td className='py-2 px-4 whitespace-nowrap'>Waktu Acara</td>
            <td className='py-2 px-4 font-bold text-[#303437]'>08:00 - 12:00</td>
          </tr>
          <tr className='bg-[#F2F4F5]'>
            <td className='py-2 px-4 whitespace-nowrap'>Deskripsi Acara</td>
            <td className='py-2 px-4 text-[#303437]'>
              Ketua Umum Pengurus Pusat (PP) Muhammadiyah akan mengadakan rapat Dewan Pengurus dengan tema ‘Masa Depan Indonesia yang Berdaulat, Berdaya Saing, dan Menyejahterakan Rakyat' di Kantor Muhammadiyah, Jakarta. Para pakar Muhammadiyah akan berkumpul dan membahas apa yang akan dipersembahkan organisasi kepada Indonesia ke depan.
            </td>
          </tr>
        </table>

        <div className='flex flex-row gap-3 pt-6'>
          <Button className='bg-[#12B569] font-bold shadow-none flex items-center gap-2 hover:shadow-[#12B569]/20'>
            <CheckIcon />
            Approve
          </Button>
          <Button className='bg-[#F79009] font-bold shadow-none flex items-center gap-2  hover:shadow-[#F79009]/20'>
            <PlusIcon className='rotate-45' />
            Decline
          </Button>
          <Button onClick={detail.handleBack} className='border border-[#20519F] text-[#20519F] bg-transparent font-bold shadow-none flex items-center gap-2  hover:shadow-[#20519F]/20'>
            Batal
          </Button>
        </div>
      </div>
      <div className='px-10 py-3'>
        <Typography variant="h5" className="text-[#514E4E] font-normal pb-5">Poster Acara</Typography>
        <img src={'https://placekitten.com/640/360'} alt="" />
      </div>
    </div>
  )
}
