

import { Breadcrumbs } from '@common/components'

import FolderIcon from '@common/components/icons-new/FolderIcon'

import { Button, Card, IconButton, Input, Option, Select, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import { Outlet } from 'react-router-dom'
import useApprovalLayoutModel from './ApprovalLayoutModel'
import { ArrowIcon } from '@common/components/icons'


export default function ApprovalLayout() {
  const layout = useApprovalLayoutModel()
  return (
    <>
      <main>
        <Breadcrumbs items={
          layout.id ?
            layout.path.pathname.includes('detail-acara') ? ["Approval", "Detail Acara"]
              : layout.path.pathname.includes('detail-berita') ? ["Approval", "Detail Berita"]
                : [] : layout.path.pathname.includes('declined') ? ['Approval', 'Declined List'] : ['Approval']
        } />
      </main>
      <Card className="w-full border border-gray-300 rounded-xl mt-8">
        <div className="flex flex-row justify-between px-12 py-6 border-b border-[#D0D3D9]">
          <Typography variant="h3" color="black">
            {
              layout.id ?
                layout.path.pathname.includes('detail-acara') ? "Detail Acara"
                  : layout.path.pathname.includes('detail-berita') ? "Detail Berita"
                    : null
                : layout.path.pathname.includes('declined') ? "Declined List" : 'Approval Updates'
            }
          </Typography>
          {
            layout.id ?
              null
              : layout.path.pathname.includes('declined') ?
                <Button onClick={layout.handleBack} className='flex items-center gap-3 bg-transparent border border-[#514E4E] text-[#514E4E] rounded-[4px] shadow-none hover:shadow-[#bc8c18]/20'>
                  <ArrowIcon fill={'#514E4E'} className='-rotate-90' />
                  Back
                </Button>
                : <Button onClick={layout.handleDecline} className='flex items-center gap-3 bg-[#BC8C18] rounded-[4px] shadow-none hover:shadow-[#bc8c18]/20'>
                  <FolderIcon />
                  Declined List
                </Button>
          }
        </div>
        <Outlet />
      </Card>
    </>
  )
}
