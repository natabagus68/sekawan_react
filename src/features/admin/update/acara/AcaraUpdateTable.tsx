import { ArrowIcon } from '@common/components/icons'
import InfoIcon from '@common/components/icons-new/InfoIcon'
import SearchIcon from '@common/components/icons-new/SearchIcon'
import TrashIcon from '@common/components/icons-new/TrashIcon'
import { Button, IconButton, Input, Option, Select, Typography } from '@material-tailwind/react'
import React from 'react'
import ModalDetail from './ModalDetailAcara'
import ModalDetailAcara from './ModalDetailAcara'
import useAcaraUpdateTableModel from './AcaraUpdateTableModel'
import ModalDelete from '@common/components/modals/ModalDelete'

export default function AcaraUpdateTable() {
  const table = useAcaraUpdateTableModel()
  return (
    <>
    <ModalDelete open={table.modalDelete} tittle='Hapus Acara' message={['Apakah anda yakin ingin menghapus acara ini?']} setOpen={table.setModalDelete} />
    <ModalDetailAcara id={table.idAcara? true : false} onClose={table.modalHandleClose} handleDelete={()=> {table.setModalDelete(true); table.modalHandleClose()}} />
    <div className='flex justify-between px-12 py-3'>
      <div className='py-3 w-1/3'>
        <Input label='Search Nama Acara' icon={<SearchIcon color='#231F20'/>}className='border border-[#231F20]'/>
      </div>
      <div className='flex flex-row items-center gap-3 w-1/3'>
        <Typography variant='h6' className='whitespace-nowrap'>Sort by</Typography>
        <Select defaultValue={'asc'} label='Sort by'>
          <Option value='asc'>Tanggal Disetujui (Terbaru)</Option>
          <Option value='desc'>Tanggal Disetujui (Terlama)</Option>
          <Option value='acara-asc'>Tanggal Acara (Terbaru)</Option>
          <Option value='acara-desc'>Tanggal Acara (Terlama)</Option>
        </Select>
      </div>
    </div>
    <div className='overflow-x-auto'>
      <table className='w-full '>
        <thead className='border border-y-[#D0D3D9] bg-[#FAFAFB]'>
          <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Tanggal Disetujui</th>
          <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Nama Acara</th>
          <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Tanggal Acara</th>
          <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Waktu Acara</th>
          <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Lokasi Acara</th>
          <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Pembuat Acara</th>
          <th className='py-5 pl-12 text-start text-[40446] font-semibold'>Action</th>
        </thead>
        <tbody >
          <tr className='border border-y-[#D0D3D9]'>
            <td className='py-5 pl-12'>12/12/2022</td>
            <td className='py-5 pl-12'>Rapat Dewan</td>
            <td className='py-5 pl-12'>12/12/2022</td>
            <td className='py-5 pl-12'>08:00 - 12:00</td>
            <td className='py-5 pl-12'>Gedung A</td>
            <td className='py-5 pl-12'>Bramantra Putra</td>
            <td className='py-5 pl-12 flex gap-2'>
              <Button onClick={()=>table.handleDetail(22)} className='bg-[#20519F] font-bold shadow-none flex items-center gap-2 hover:shadow-[#20519F]/20'>
                <InfoIcon />
                Detail
              </Button>
              <IconButton onClick={()=> table.setModalDelete(true)} itemProp='1' className='bg-[#F04438] shadow-none hover:shadow-[#F04438]/20'><TrashIcon/></IconButton>
            </td>
          </tr>
        
        </tbody>
      </table>
    </div>
    <div className='flex flex-row justify-between items-center px-12 py-6 border-b border-[#D0D3D9]'>
      <span className='font-bold'>1 - 20 of 60 Approval Acara</span>
      <div className='flex justify-between gap-5'>
        <Button  className={`flex items-center gap-3 bg-transparent shadow-none focus:outline-none border border-[#B8B6B6] text-[#B8B6B6] hover:shadow-none`}>
          <ArrowIcon className="-rotate-90" fill={`#B8B6B6`} />
          Prev
        </Button>
        <IconButton itemProp='1' className='bg-[#2980DE] shadow-none hover:shadow-none'>1</IconButton>
        <Button className={`flex items-center gap-3 bg-transparent shadow-none focus:outline-none border border-[#2980DE] text-[#2980DE] hover:shadow-none`}>
          Next
          <ArrowIcon className="rotate-90" fill={`#2980DE`} />
        </Button>
      </div>
    </div>
  </>
  )
}
