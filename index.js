import { visit } from 'unist-util-visit'

export default function remarkVideos()
{
	function visitor(node)
	{
		if (node.url.endsWith('.mp4'))
		{
			node.type = 'element'
			node.data = {
				hName: 'video',
				hProperties: {
					src: node.url,
					controls: true,
				}
			}
		}
	}

	function transform(tree)
	{
		visit(tree, 'image', visitor)
	}

	return transform
}