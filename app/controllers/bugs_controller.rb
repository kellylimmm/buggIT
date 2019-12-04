class BugsController < ApplicationController
  # before_action :set_bug, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  # GET /bugs
  # GET /bugs.json
  def index
    p params
    @bugs = Bug.all.where(params[:id])

    respond_to do |format|
    format.json {
      render :json => @bugs
    }
  end
end
  # GET /bugs/1
  # GET /bugs/1.json
  def show
    @bugs = Bug.find(params[:id])
    # render :json => @bugs
  end

  # GET /bugs/new
  def new
    @bug = Bug.new
  end

  # GET /bugs/1/edit
  def edit
    @bug = Bug.find(params[:id])
    p "@@@@@@@@@@@@"
    p @bug
    p "@@@@@@@@@@@@"
  end

  # POST /bugs
  # POST /bugs.json
  def create
    p "/////////////////////////////////////"
    @bug = Bug.new(:bug_title => params[:bugsname], :issue_log => params[:comments], :project_id => params[:project_id],
      :due_date => params[:dueDate], :priority => params[:priority], :status => params[:status], :severity => params[:severity])


    respond_to do |format|
      if @bug.save
        p 'successsssssssss'
        format.html { redirect_to @bug }
        format.json { render json: @bug }
      else
        p 'failllllllll'
        # format.html { render :new }
        # format.json { render json: @bug.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bugs/1
  # PATCH/PUT /bugs/1.json
  def update
    @bug = Bug.find(params[:id])
    @bug.update(bug_params)

      redirect_to @bug
  end

  # DELETE /bugs/1
  # DELETE /bugs/1.json
  def destroy
    @bug.destroy
    respond_to do |format|
      format.html { redirect_to bugs_url, notice: 'Bug was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def human_boolean(boolean)
    boolean ? 'Closed' : 'Open'
end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bug
      @bug = Bug.find(params[:id])
    end

def bug_params
  params.require(:bug).permit(:bug_title, :issue_log, :project_id, :due_date, :priority, :status, :issue_resolved, :severity)
    # Never trust parameters from the scary internet, only allow the white list through.
    # def bug_params
    #   params.fetch(:bug, {})
    # end
end
end