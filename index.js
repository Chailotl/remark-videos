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
					controls: true,
					name: 'media'
				},
				hChildren: [{
					type: 'element',
					tagName: 'source',
					properties: {
						src: node.url,
						type: 'video/mp4'
					}
				}]
			}
		}
	}

	function transform(tree)
	{
		visit(tree, 'image', visitor)
	}

	return transform
}