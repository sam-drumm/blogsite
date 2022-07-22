import React, { useContext, useState } from 'react'
import { BlogsiteContext } from '../context/BlogsiteContext'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const styles = {
  wrapper: 'w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll',
  title: 'my-[2rem] font-bold text-3xl',
  smallField: 'w-full flex justify-between gap-[1rem]',
  fieldTitle: 'flex-1 text-end',
  inputContainer: 'flex-[5] h-min border-2 border-[#787878]',
  inputField: 'w-full border-0 outline-none bg-transparent',
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full'
}

const PostModal = () => {
  const { currentUser } = useContext(BlogsiteContext)
  const [title, setTitle] = useState('')
  const [brief, setBrief] = useState('')
  const [category, setCategory] = useState('')
  const [postLength, setPostLength] = useState('')
  const [bannerImage, setBannerImage] = useState('')
  const [body, setBody] = useState('')

  const addPostToFireBase = async (e) => {
    e.preventDefault()

    await addDoc(collection(db, 'articles'), {
      bannerImage: bannerImage,
      body: body,
      title: title,
      author: currentUser.email,
      postedOn: serverTimestamp(),
      postLength: Number(postLength),
      category: category,
      brief: brief
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a post</div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input className={styles.inputField}
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input className={styles.inputField}
            type='text'
            value={brief}
            onChange={e => setBrief(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input className={styles.inputField}
            type='text'
            value={bannerImage}
            onChange={e => setBannerImage(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input className={styles.inputField}
            type='text'
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Estimated Read Length (mins)</span>
        <span className={styles.inputContainer}>
          <input className={styles.inputField}
            type='text'
            value={postLength}
            onChange={e => setPostLength(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea className={styles.inputField}
            type='text'
            rows='12'
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </span>
      </div>
      <button className={styles.accentedButton} onClick={addPostToFireBase}>
        Submit
      </button>

    </div>

  )
}
export default PostModal
