

import { Breadcrumbs } from '@common/components'
import { ArrowIcon } from '@common/components/icons'
import { Button, Card, Typography } from '@material-tailwind/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Updatelayout() {
  return (
    <>
      <main>
        <Breadcrumbs items={
          ['Updates']
        } />
      </main>
      <Card className="w-full border border-gray-300 rounded-xl mt-8">
        <div className="flex flex-row justify-between px-12 py-6 border-b border-[#D0D3D9]">
          <Typography variant="h3" color="black">
            Updates
          </Typography>
        </div>
        <Outlet />
      </Card>
    </>
  )
}
