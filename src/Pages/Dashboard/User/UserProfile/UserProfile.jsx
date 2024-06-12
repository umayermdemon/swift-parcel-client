import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase/firebase.config";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UserProfile = () => {
  const { user } = useAuth();

  const axiosPublic = useAxiosPublic();
  const [profileImage, setProfileImage] = useState(user?.photoURL);


  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    if (res.data.success) {
      const imageUrl = res.data.data.display_url;
      updateProfile(auth.currentUser, {
        photoURL: imageUrl,
      })
        .then(() => {
          setProfileImage(imageUrl);
          window.location.reload()
        })
        .catch((error) => {
          console.error(error);
        });

       
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-40 h-40 rounded">
            <img src={profileImage} />
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center my-4 gap-2"
      >
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
          {...register("image")}
        />
        <button className="btn bg-[#0B2D42] text-white">Upload</button>
      </form>
    </div>
  );
};

export default UserProfile;
