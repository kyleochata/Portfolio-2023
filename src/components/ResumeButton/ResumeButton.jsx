const ResumeButton = ({ style }) => {
  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual path to your PDF file
    const pdfPath = '../../../public/resume.pdf'

    // Trigger the download
    window.open(pdfPath, '_blank')
  }

  return (
    <button onClick={handleDownload} className={style.rmvBtn}>
      Download My Resume!
    </button>
  )
}
export default ResumeButton
