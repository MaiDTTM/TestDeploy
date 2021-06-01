import React, { createElement, useState, useEffect } from 'react';
import { Comment, Avatar, Form, Tooltip, Button, List, Input } from 'antd';
import moment from 'moment';
import style from './styles.module.scss';
import {
	DislikeOutlined,
	LikeOutlined,
	DislikeFilled,
	LikeFilled,
} from '@ant-design/icons';
// import PropTypes from 'prop-types';
//const
const { TextArea } = Input;
const CommentList = ({ comments }) => (
	<List
		dataSource={comments}
		header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
		itemLayout="horizontal"
		renderItem={(props) => <Comment {...props} />}
	/>
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
	<>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>
		<Form.Item>
			<Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
				Add Comment
			</Button>
		</Form.Item>
	</>
);
function CommentProduct() {
	//state
	const [comments, setComments] = useState([]);
	const [submitting, setSubmitting] = useState(false);
	const [value, setValue] = useState('');
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [action, setAction] = useState(null);
	// const [actionAdd, setActionAdd] = useState([]);
	// const func
	const handleSubmit = () => {
		if (!value) {
			return;
		}
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			setValue('');
			setComments([
				...comments,
				{
					actions: actions,
					author: 'Han Solo',
					avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
					content: <p>{value}</p>,
					datetime: moment().fromNow(),
				},
			]);
		}, 1000);
	};
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const like = () => {
		console.log('1');
		setLikes(1);
		setDislikes(0);
		setAction('liked');
	};

	const dislike = () => {
		console.log('2');
		setLikes(0);
		setDislikes(1);
		setAction('disliked');
	};
	const actions = [
		<Tooltip key="comment-basic-like" title="Like">
			<span onClick={like}>
				{createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
				<span className="comment-action">{likes}</span>
			</span>
		</Tooltip>,
		<Tooltip key="comment-basic-dislike" title="Dislike">
			<span onClick={dislike}>
				{React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
				<span className="comment-action">{dislikes}</span>
			</span>
		</Tooltip>,
		<span key="comment-basic-reply-to">Reply to</span>,
	];
	return (
		<div className={style.comment}>
			<div className={style.title_comment}>ĐÁNH GIÁ SẢN PHẨM</div>
			<div>
				{comments.length > 0 && <CommentList comments={comments} />}
				<Comment
					avatar={
						<Avatar
							src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							alt="Han Solo"
						/>
					}
					content={
						<Editor
							onChange={handleChange}
							onSubmit={handleSubmit}
							submitting={submitting}
							value={value}
						/>
					}
				/>
			</div>
		</div>
	);
}

CommentProduct.propTypes = {};

CommentProduct.defaultProps = {};

export default CommentProduct;
