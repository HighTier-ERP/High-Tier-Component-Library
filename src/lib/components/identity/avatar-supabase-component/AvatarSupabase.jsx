import React from 'react';
import { useEffect, useState } from 'react';

export default function AvatarSupabase({
	url,
	size,
	onUpload,
	editUser,
	supabase
}) {
	const [avatarUrl, setAvatarUrl] = useState(null);
	const [uploading, setUploading] = useState(false);

	useEffect(() => {
		if (url) downloadImage(url);
	}, [url, downloadImage()]);

	async function downloadImage(path) {
		try {
			const { data, error } = await supabase.storage
				.from('avatars')
				.download(path);
			if (error) {
				throw error;
			}
			const url = URL.createObjectURL(data);
			setAvatarUrl(url);
		} catch (error) {
			console.log('Error downloading image: ', error.message);
		}
	}

	async function uploadAvatar(event) {
		try {
			setUploading(true);

			if (!event.target.files || event.target.files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = event.target.files[0];
			const fileExt = file.name.split('.').pop();
			const fileName = `${Math.random()}.${fileExt}`;
			const filePath = `${fileName}`;

			let { error: uploadError } = await supabase.storage
				.from('avatars')
				.upload(filePath, file);

			if (uploadError) {
				throw uploadError;
			}

			onUpload(filePath);
		} catch (error) {
			alert(error.message);
		} finally {
			setUploading(false);
		}
	}

	return (
		<div
			className="relative br-8px image mb-20px overflow-hidden box-shadow"
			style={{
				height: size,
				width: size,
				backgroundImage: `url(${avatarUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			{editUser && (
				<div
					className="absolute bottom-0 bg-gray-4 align-center justify-center pointer"
					style={{ width: size }}
				>
					<label
						className="flex flex-row f-s-14px pointer align-center justify-center w-100 py-5px"
						htmlFor="single"
					>
						<span
							htmlFor="single"
							className="material-icons-outlined pr-10px"
						>
							upload_file
						</span>
						{uploading ? 'Uploading ...' : 'Upload'}
					</label>
					<input
						style={{
							visibility: 'hidden',
							position: 'absolute'
						}}
						type="file"
						id="single"
						accept="image/*"
						onChange={uploadAvatar}
						disabled={uploading}
					/>
				</div>
			)}
		</div>
	);
}
