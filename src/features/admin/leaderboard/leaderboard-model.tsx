import {useState, useEffect} from "react"

export default function useLeaderBoardModel() {
  const [openDetail, setOpenDetail] = useState(false)
  const onOpenDetail = () => setOpenDetail(true)
  const onCloseDetail = () => setOpenDetail(false)
  return {
    openDetail,
    onOpenDetail,
    onCloseDetail,
  }
}
