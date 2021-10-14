<!--
 * @Description: 
 * @Author: xionglaifu
 * @Date: 2021-10-13 10:58:05
 * @LastEditors: xionglaifu
 * @LastEditTime: 2021-10-14 19:45:22
 * @company: formssi
-->
<template>
  <Layout>
    <!-- Page Header -->
    <header
      class="masthead"
      :style="{
        backgroundImage: `url(${GRIDSOME_API_URL + general.cover.url})`,
      }"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{ general.title }}</h1>
              <span class="subheading">{{ general.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.id">
            <g-link :to="'/post/' + edge.node.id">
              <h2 class="post-title">
                {{ edge.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <p class="post-meta">
              Posted
              <!-- <a href="#">Start Bootstrap</a> -->
              on {{ edge.node.created_at }}
            </p>
            <p>
              <span v-for="tag in edge.node.tags" :key="tag.id">
                <g-link :to="'/tag/' + tag.id">{{ tag.title }} &nbsp;&nbsp; </g-link>
              </span>
            </p>
            <hr />
          </div>
          <hr />
          <!-- Pager -->
          <!-- <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div> -->
          <Pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query ($page:Int){
    posts:allStrapiPost(perPage:2,page:$page) @paginate{
      pageInfo{
        totalPages
        currentPage
      },
      edges {
        node {
          id 
          title 
          created_at
          tags {
            id
            title
          }
        }
      }
    }

  general : allStrapiGeneral {
    edges {
      node{
        id
        title
        subtitle
        cover {
          url
        }
      }
    }
  }
  }
</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  components: { Pager },
  name: 'HomePage',
  metaInfo: {
    title: 'Hello, world!',
  },
  computed: {
    general() {
      return this.$page.general.edges[0].node
    },
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
